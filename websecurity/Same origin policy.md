# Same-Origin-Policy(SOP) - The Default Security Rule

1. This is the browser's main security rule. It says that a website (Website A) can only read data from another website (Website B) if they both come from the exact same "origin."

2. `What is an "Origin"? Think of it like a website's full address, including:`

   1. Protocol: http:// or https:// (e.g., https is different from http)

   2. Domain (Host): google.com or facebook.com (e.g., app.example.com is different from api.example.com)

   3. Port: The number after the domain if specified (e.g., :8080 is different from :3000)

   Example:

   - https://mybank.com/account and https://mybank.com/transactions are Same-Origin.
   - https://mybank.com and http://mybank.com are DIFFERENT Origins (protocol).
   - https://mybank.com and https://secure.mybank.com are DIFFERENT Origins (domain/host).
   - https://mybank.com and https://mybank.com:8080 are DIFFERENT Origins (port).

3. Why it exists: To prevent malicious websites from stealing your sensitive data.

   1. **_Without SOP_**: If you're logged into your bank on one tab and then visit a bad website on another tab, that bad website's code could secretly ask your bank for your account details and read them. SOP stops this!

4. **_What it blocks_**: Mostly, it blocks JavaScript from reading responses from cross-origin requests. It usually allows actions like clicking links or submitting forms to other origins, but it prevents reading the response data.
