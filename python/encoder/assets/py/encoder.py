import random
alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"
toencrypt = input ("Enter a message to encrypt: ")
toencrypt = toencrypt.upper()
shiftstr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
shift = int(random.choice(shiftstr))
shiftdict = {2: "B", 3: "C", 4: "D", 5: "E", 6: "F", 7: "G", 8: "H", 9: "I", 10: "J", 11: "K", 12: "L", 13: "M", 14: "N", 15: "O", 16: "P", 17: "Q", 18: "R", 19: "S", 20: "T", 21: "U", 22: "V", 23: "W", 24: "X"}
encrypted = ""
for character in toencrypt:
    pos = alphabet.find(character)
    newpos = pos + shift
    if character in alphabet:
        encrypted = encrypted + alphabet[newpos]
    else:
        encrypted = encrypted + character
print("Encrypted:", (shiftdict[(shift)]), encrypted)
