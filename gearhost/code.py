import cgitb
cgitb.enable()
start_response('200 OK', [('Content-Type', 'text/html')])
alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"
toencrypt = input ("enter a message to encrypt: ")
toencrypt = toencrypt.upper()
shift = int(input("a whole number from 1-25."))
encrypted = ""
for character in toencrypt:
    pos = alphabet.find(character)
    newpos = pos + shift
    if character in alphabet:
        encrypted = encrypted + alphabet[newpos]
    else:
        encrypted = encrypted + character
print("message is", encrypted)
