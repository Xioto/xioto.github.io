alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ"
todecrypt = input ("Enter a message to decrypt: ")
todecrypt = todecrypt.upper()
shiftdict = {"B": -2, "C": -3, "D": -4, "E": -5, "F": -6, "G": -7, "H": -8, "I": -9, "J": -10, "K": -11, "L": -12, "M": -13, "N": -14, "O": -15, "P": -16, "Q": -17, "R": -18, "S": -19, "T": -20, "U": -21, "V": -22, "W": -23, "X": -24}
shift = shiftdict[(todecrypt[0])]
decrypted = ""
decrypted.replace(str([0], "")
for character in todecrypt:
    pos = alphabet.find(character)
    newpos = pos + shift
    if character in alphabet:
        decrypted = decrypted + alphabet[newpos]
    else:
        decrypted = decrypted + character
print("Decrypted:", decrypted)
