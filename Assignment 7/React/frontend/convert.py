import markdown2
import pdfkit

input_file = 'Explanation.md'
output_file = 'Explanation.pdf'

# Read the Markdown file
with open(input_file, 'r', encoding='utf-8') as f:
    markdown_text = f.read()

# Convert Markdown to HTML
html_text = markdown2.markdown(markdown_text)

# Convert HTML to PDF
pdfkit.from_string(html_text, output_file)

print(f'Converted {input_file} to {output_file}')
