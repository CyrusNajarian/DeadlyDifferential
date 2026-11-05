"""Generate the editable organizer workbook directly from the published JS data.
Requires Python xlsxwriter and Node.js. Run from any directory.
"""
import json
import subprocess
from pathlib import Path
import openpyxl
import xlsxwriter
from xlsxwriter.utility import xl_col_to_name

ROOT = Path(__file__).resolve().parents[1]
data = json.loads(subprocess.check_output(['node', str(ROOT / 'scripts/export-answer-matrix.cjs')], text=True))
output = ROOT / 'Deadly_Differential_Answer_Matrix.xlsx'
# Keep the editable approvals authoritative when refreshing catalog text/layout.
previous = {}
if output.exists():
 old = openpyxl.load_workbook(output, data_only=True)
 for name in ['Symptoms', 'Diagnoses']:
  if name not in old: continue
  rows = list(old[name].values)
  codes = [str(h or '').split(' | ')[0] for h in rows[4]]
  for row in rows[5:]:
   for col in range(5, min(len(row), len(codes))):
    previous[(name, row[0], codes[col])] = 'Yes' if str(row[col] or '').strip().lower() == 'yes' else 'No'
# Preserve any Yes from a retired row under its canonical main entry.
for (sheet, id, code), value in list(previous.items()):
 canonical = data.get('retiredIds', {}).get(id, id)
 if value == 'Yes': previous[(sheet, canonical, code)] = 'Yes'
# Approved parkinsonian alternatives always move together.
for case in data['cases']:
 code = case['code']
 for family in data.get('approvalGroups', []):
  if any(previous.get(('Diagnoses', id, code)) == 'Yes' for id in family):
   for id in family: previous[('Diagnoses', id, code)] = 'Yes'
book = xlsxwriter.Workbook(output)
book.set_properties({'title': 'Deadly Differential — Answer Matrix', 'subject': 'Editable symptom and diagnosis approvals', 'author': 'Deadly Differential'})
navy, teal, ink, muted = '#123940', '#137D78', '#183D44', '#5C7278'
hero = book.add_format({'bold': True, 'font_size': 22, 'font_color': 'white', 'bg_color': navy, 'valign': 'vcenter'})
sub = book.add_format({'font_color': muted, 'text_wrap': True, 'valign': 'vcenter'})
body = book.add_format({'font_color': ink, 'text_wrap': True, 'valign': 'top'})
heading = book.add_format({'bold': True, 'font_color': 'white', 'bg_color': teal, 'text_wrap': True, 'valign': 'vcenter'})
yes = book.add_format({'bg_color': '#DDF3E8', 'font_color': '#126140', 'bold': True, 'align': 'center'})
no = book.add_format({'font_color': '#8B999D', 'align': 'center'})
count = book.add_format({'align': 'center', 'font_color': teal, 'bold': True})
link = book.add_format({'font_color': teal, 'underline': True})

readme = book.add_worksheet('Read me')
readme.hide_gridlines(2)
readme.set_column('A:A', 3)
readme.set_column('B:H', 15)
readme.merge_range('B2:H3', 'DEADLY DIFFERENTIAL\nAnswer matrix', hero)
notes = [
 ('What is included', f"{sum(a['type']=='symptom' for a in data['items'])} symptoms/signs, {sum(a['type']=='disease' for a in data['items'])} diagnoses, and all {len(data['cases'])} playable clue/person screens. Every main reference entry is included, including entries with no approved case. Subtypes and synonyms resolve to these same main names."),
 ('Edit answer approvals', 'Use the Yes/No dropdowns in Symptoms and Diagnoses. Yes means the entry is an approved answer or diagnostic possibility for that case. Blank is treated as No. The count updates automatically.'),
 ('Find the right case', 'Cases lists every column code and the person or clue it represents. C = culprit; R = reception; T = team room; Y = yearly review; E = emails; V = video.'),
 ('Grouping rules', 'Tumor subtypes share Brain tumor; ischemic stroke mechanisms share Ischemic stroke; inherited ataxias share Cerebellar dysfunction; paralysis shares Weakness. If any parkinsonian diagnosis is accepted for a case, all seven listed parkinsonian diagnoses are accepted. This is a game scoring rule. To turn that family off in a case, set every family entry to No.'),
 ('Current scoring', 'Symptoms are checked while examining suspect clues. Suspect diagnoses are submitted together later. The diagnosis columns for suspect clues are supporting possibilities, not the final assignment key. Answer key shows the final diagnoses separately.'),
 ('Apply changes to the app', 'Replace this workbook in the repository and push to main. Netlify builds default answer approvals from it automatically. setup.html loads the repository workbook by default; upload an edited copy there for a device-only preview before committing it.'),
 ('Keep the structure', 'Keep both data sheets, all Reference ID rows, the case columns, and the row 5 headers. Rows may be sorted. Names/definitions and Answer key are reference information: edit the source JS to change those. Upload applies only Yes/No approvals.'),
 ('Observation-only screens', 'Some treatment/history clues have no scored symptom. Their symptom cells are initially No. Adding a symptom makes it a scored symptom stage; removing every symptom from an ordinary symptom stage is rejected.'),
 ('Share and review', 'Use column filters to show only Yes for a particular case. The term and definition columns stay visible as you scroll. Share this .xlsx with co-organizers or open it in Excel/Google Sheets.'),
 ('Regenerate', 'Run python scripts/build-answer-workbook.py after source changes. Regeneration refreshes reference information and preserves existing Yes/No approvals. The checked-in workbook supplies the default deployed approvals.'),
]
row = 5
for title, text in notes:
 readme.merge_range(row, 1, row, 7, title, heading)
 readme.merge_range(row+1, 1, row+2, 7, text, body)
 text_height = max(22, ((len(text) + 89) // 90) * 7.5)
 readme.set_row(row+1, text_height); readme.set_row(row+2, text_height)
 row += 4
readme.freeze_panes(5, 1)
readme.set_landscape(); readme.fit_to_pages(1, 0); readme.print_area(1, 1, row-1, 7)

cases = data['cases']
for name, kind, field in [('Symptoms', 'symptom', 'symptoms'), ('Diagnoses', 'disease', 'diagnoses')]:
 ws = book.add_worksheet(name)
 ws.hide_gridlines(2)
 last = 4 + len(cases)
 ws.merge_range(0, 0, 1, last, name.upper() + ' · CASE ANSWER MATRIX', hero)
 ws.merge_range(2, 0, 2, last, 'Edit Yes/No cells · filters in row 5 · freeze keeps reference columns visible · case codes explained on Cases', sub)
 ws.set_row(0, 24); ws.set_row(1, 18); ws.set_row(2, 25); ws.set_row(4, 82)
 ws.set_column(0, 0, 30, body, {'hidden': True})
 ws.set_column(1, 1, 34, body); ws.set_column(2, 2, 26, body); ws.set_column(3, 3, 54, body); ws.set_column(4, 4, 10, count)
 ws.set_column(5, last, 24, no)
 headers = ['Reference ID', 'Term', 'Category', 'Definition', 'Yes count'] + [f"{c['code']} | {c['label']} | {c['detail']}" for c in cases]
 items = sorted((a for a in data['items'] if a['type'] == kind), key=lambda a: (a['category'].lower(), a['term'].lower()))
 for r, item in enumerate(items, 5):
  flags = [previous.get((name, item['id'], c['code']), 'Yes' if item['id'] in c[field] else 'No') for c in cases]
  ws.write_row(r, 0, [item['id'], item['term'], item['category'], item['description']])
  ws.write_formula(r, 4, f'=COUNTIF(F{r+1}:{xl_col_to_name(last)}{r+1},"Yes")', count, flags.count('Yes'))
  ws.write_row(r, 5, flags)
  ws.set_row(r, 46 if len(item['description']) < 150 else 64)
 ws.add_table(4, 0, 4+len(items), last, {'name': name+'Matrix', 'style': 'Table Style Medium 2', 'columns': [{'header': h, 'header_format': heading} for h in headers]})
 ws.data_validation(5, 5, 4+len(items), last, {'validate': 'list', 'source': ['Yes', 'No'], 'input_title': 'Approved for this case?', 'input_message': 'Yes = accepted. No = not accepted.', 'error_title': 'Use Yes or No', 'error_message': 'Select Yes or No from the dropdown.'})
 ws.conditional_format(5, 5, 4+len(items), last, {'type': 'cell', 'criteria': 'equal to', 'value': '"Yes"', 'format': yes})
 ws.freeze_panes(5, 5); ws.set_zoom(85); ws.set_landscape(); ws.repeat_rows(4); ws.fit_to_pages(1, 0)
 ws.print_area(0, 0, 4+len(items), last)

ws = book.add_worksheet('Cases'); ws.hide_gridlines(2)
ws.merge_range('A1:F2', 'CASE COLUMN GUIDE', hero)
headers = ['Code', 'Section', 'Clue / evidence', 'Stage / person', 'Symptom task', 'Diagnosis role']
rows = [[c['code'], c['section'].title(), c['label'], c['detail'], 'Observation acknowledgement' if c['observationOnly'] else 'Scored symptoms', 'Scored possibilities' if c['section']=='culprit' else 'Supporting possibilities; batch assignment later'] for c in cases]
ws.add_table(4,0,4+len(rows),5,{'name':'CaseGuide','style':'Table Style Medium 2','columns':[{'header':h,'header_format':heading} for h in headers],'data':rows})
ws.set_column('A:B',16,body);ws.set_column('C:D',34,body);ws.set_column('E:F',42,body)
for r in range(5,5+len(rows)):ws.set_row(r,42)
ws.freeze_panes(5,2);ws.set_row(4,32)

ws = book.add_worksheet('Answer key'); ws.hide_gridlines(2)
ws.merge_range('A1:D2', 'FINAL SUSPECT DIAGNOSES', hero)
ws.merge_range('A3:D3', 'Reference only · the all-six assignment key is configured in case-resolution-data.js', sub)
byid = {a['id']: a for a in data['items']}
rows = [[p['id'],p['name'],byid[p['primary']]['term'],'; '.join(byid[i]['term'] for i in p['accepted'])] for p in data['key']]
ws.add_table(4,0,4+len(rows),3,{'name':'FinalAnswerKey','style':'Table Style Medium 2','columns':[{'header':h,'header_format':heading} for h in ['Person ID','Suspect','Correct diagnosis','Accepted diagnoses']],'data':rows})
ws.set_column('A:A',12,body);ws.set_column('B:B',25,body);ws.set_column('C:D',48,body)
for r in range(5,11):ws.set_row(r,44)
ws.freeze_panes(5,2)
book.close()
print(output)
