import Card
#idk you insert data through args
def main():
    # Input a list of parameters separated by commas
    cardInput = input("Enter the card details separated by commas: ").split(",")

    # Check if input is valid
    for i in range(6):
        if cardInput[i] == "":
            print("Invalid input, one of the fields is empty!")
            return
    
    # Create Card object
    # 1: String location
    # 2: String date
    # 3: String (int/float?) time
    # 4: float gasFee
    # 5: String (int/float?) estTime
    # 6: int capacity
    newEntry = Card(cardInput[0], cardInput[1], cardInput[2], float(cardInput[3]), cardInput[4], int(cardInput[5]))
