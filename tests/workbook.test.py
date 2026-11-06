"""Validate the real Excel file, then exercise the browser importer with its rows."""
import json
import subprocess
from pathlib import Path
import openpyxl
root = Path(__file__).resolve().parents[1]
file = root / 'Deadly_Differential_Answer_Matrix.xlsx'
book = openpyxl.load_workbook(file, data_only=True)
assert book.sheetnames == ['Read me', 'Symptoms', 'Diagnoses', 'Cases', 'Answer key']
for name, count in [('Symptoms', 91), ('Diagnoses', 92)]:
 sheet = book[name]
 assert sheet.max_row == count + 5
 assert sheet.max_column == 24
 assert sheet.freeze_panes == 'F6'
 assert sheet.data_validations.count == 1
 assert len(sheet.tables) == 1
 for row in sheet.iter_rows(min_row=6, values_only=True):
  assert row[0] and row[1] and row[3]
  assert row[4] == sum(x == 'Yes' for x in row[5:])
subprocess.run(['node', str(root / 'tests/answer-matrix.test.cjs')], input=json.dumps({s.title: list(s.values) for s in book}), text=True, check=True)
print('PASS: workbook formatting, cached counts, dropdowns, filters, frozen panes and complete reference rows.')
