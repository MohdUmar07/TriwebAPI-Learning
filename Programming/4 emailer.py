import yagmail

user = "abcd@gmail.com"
appCode = "xxxx xxxx xxxx xxxx"

to = "xyz@gmail.com"
subject = "This is subject"
content = "This content"

with yagmail.SMTP(user, appCode) as yag:
    yag.send(to, subject, content);