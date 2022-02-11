# Multiple attachments i mail fra dokument bibliotek

Følgende tilføjelse til et flow gør det muligt automatisk at vedhæfte en eller flere filer når der afsendes en mail.

1. Opret en **trigger**

2. **Get files** fra det relevante **document library**

3. Opret et nyt array via **Initialize variable**

4. Opret **Apply to each**

5. Get file content i **Apply to each**. Note: Sæt **Infer Content Type** til **No** hvis hvis *step 6.* giver en Null value.

6. Opret en ny **Append to array variable** tilknyttet det array der blev oprettet i *step 3.*
   
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

7. Opret **Send an email** og tilføj array til **Attachments** under **advanced options**. Note: **Send an email** skal stå <u>udenfor</u> **Apply to each**.



### Flow eksempel

![power-automate-multiple-mail-attachments](https://user-images.githubusercontent.com/47186052/153599230-22be6147-44c8-466c-a98a-cfc2b3bdeb1e.png)
