# Multiple attachments i mail fra dokument bibliotek

Følgende tilføjelse til et flow gør det muligt automatisk at vedhæfte en eller flere filer når der afsendes en mail.

1. Opret en **trigger**

2. Get files fra det relevante **document library**

3. Opret et nyt array via **Initialize variable**

4. Opret **Apply to each**

5. Get file content i **Apply to each**

6. Opret en ny **Append to array variable** tilknyttet det array oprettet i step 3
   
   Dette array skal have følgende **Value**

```json
{
  "Name": "@{items('Apply_to_each')?['{FilenameWithExtension}']}",
  "ContentBytes": {
    "$content-type": "@{body('Get_file_content')?['$Content-type']}",
    "$content": "@{body('Get_file_content')?['$Content']}"
  }
}
```

7. Opret **Send an email** og tilføj array til **Attachments **under **advanced options**.



### Flow example

![power-automate-multiple-mail-attachments](https://user-images.githubusercontent.com/47186052/153577670-69591e4a-b45c-4691-a11f-35e66684a260.png)
