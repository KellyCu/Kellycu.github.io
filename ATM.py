import tkinter as atm
from tkinter import *


cblue = "#080414"
cyellow = "#ffff1a"
cgray = "#C0C0C0"
cgreen = "#00ff00"
cred = "#ff1a1a"

# REGISTERS
global AX
global BX
global CX
global ZF
global M1

AX = 0
BX = 0
CX = 0
ZF = 0
M1 = 1000


def MOV():
    global M1
    M1 = AX

def SUB():
    global AX
    AX = M1 - AX

def exit():
    ATM_app.quit()

# BUTTONS
def btn_comp(tab):
    # ATM FUNCTIONS
    def title(tab):
        h1 = Label(tab, text="8086 ATM SIMULATOR", font=('Century 40 bold'), bg=cblue, fg="white")
        h1.place(x="150", y="20")

    def open():
        num = screen_display.get()
        if num != '':
            ATM_app.destroy()
            w2 = atm.Tk()
            w2.title("ATM")
            w2.geometry("900x500+230+110")
            w2.configure(bg=cblue)
            title(w2)

            # FUNCTIONS
            def balance():
                bal_info = Label(w2, text="₱" + str(M1) + ".00", font=("Century", 50), bg=cblue, fg="white")
                bal_info2 = Label(w2, text="Available balance", font=("Century 15 bold"), bg=cblue, fg="white")
                bal_info.place(x="520", y="190")
                bal_info2.place(x="575", y="270")

            def withdraw():
                w2.destroy()
                w3 = atm.Tk()
                w3.title("ATM")
                w3.geometry("900x500+230+110")
                w3.configure(bg=cblue)
                btn_comp(w3)
                amount = Label(w3, text="Enter amount: ", font=("Century", 30), bg=cblue, fg="white")
                amount.place(x="30", y="130")

            # BUTTONS
            Bal = Button(w2, bg=cgray, text="Check Balance", borderwidth=4, relief=RAISED, width="35", height="4", font=("Arial", 12), command=balance)
            Withdraw = Button(w2, bg=cgray, text="Withdraw", borderwidth=4, relief=RAISED, width="35", height="4", font=("Arial", 12), command=withdraw)
            Exit = Button(w2, bg=cgray, text="Exit", borderwidth=4, relief=RAISED, width="35", height="4", font=("Arial", 12), command=exit)
            # BUTTON PLACE
            Bal.place(x="90", y="140")
            Withdraw.place(x="90", y="250")
            Exit.place(x="90", y="360")
        else:
            again = Label(text="Enter valid pincode", font=("Arial", 25), bg=cblue, fg="white")
            again.place(x="320", y="90")

    # INPUT AND OUTPUT OF THE MAIN PROGRAM
    canvas = atm.Canvas(tab)
    canvas.pack()
    canvas.configure(bg=cblue, highlightthickness=0)
    title(tab)
    if tab == ATM_app:
        screen_display = atm.Entry(tab, show="*", justify=CENTER, width=15, bd=5, bg="white", font=("Arial", 20))
    else:
        screen_display = atm.Entry(tab, justify=CENTER, width=15, bd=5, bg="white", font=("Arial", 20))
    canvas.create_window(190, 160, window=screen_display)

    def key_input(number):
        current = screen_display.get()
        screen_display.delete(0, END)
        screen_display.insert(0, str(current) + str(number))

    def clear():
        screen_display.delete(0, END)

    def draw():
        user_input = screen_display.get()
        global AX
        AX = int(user_input)
        screen_display.delete(0, END)
        if AX != '':
            if M1 > AX:
                tab.destroy()
                w4 = atm.Tk()
                w4.title("ATM")
                w4.geometry("900x500+230+110")
                w4.configure(bg=cblue)
                title(w4)
                SUB()
                MOV()
                cash = int(user_input)
                cbal = Label(w4, text="ACCOUNT BALANCE: ------------------------", font=("Century", 25), bg=cblue, fg="white")
                cbal2 = Label(w4, text="₱" + str(M1) + ".00", font=("Century", 25), bg=cblue, fg="white")
                cdraw = Label(w4, text="CASH WITHDRAWN:  -------------------------", font=("Century", 25), bg=cblue, fg="white")
                cdraw2 = Label(w4, text="₱" + str(cash) + ".00", font=("Century", 25), bg=cblue, fg="white")
                dispax = Label(w4, text="AX = " + str(AX), font=("Century", 20), bg=cblue, fg="white")
                dispbx = Label(w4, text="BX = " + str(BX), font=("Century", 20), bg=cblue, fg="white")
                dispcx = Label(w4, text="CX = " + str(CX), font=("Century", 20), bg=cblue, fg="white")
                dispzf = Label(w4, text="ZF = " + str(ZF), font=("Century", 20), bg=cblue, fg="white")
                dispm1 = Label(w4, text="M1 = " + str(M1), font=("Century", 20), bg=cblue, fg="white")
                cbal.place(x="60", y="160")
                cbal2.place(x="700", y="160")
                cdraw.place(x="60", y="210")
                cdraw2.place(x="700", y="210")
                dispax.place(x="60", y="260")
                dispbx.place(x="60", y="300")
                dispcx.place(x="60", y="340")
                dispzf.place(x="60", y="380")
                dispm1.place(x="60", y="420")
                Close = Button(w4, bg=cgray, text="Exit", width="25", height="3", borderwidth=4, relief=RAISED, command=exit)
                Close.place(x="700", y="420")

            else:
                cbal = Label(tab, text="Not enough balance", font=("Century", 25), bg=cblue, fg="white")
                cbal.place(x="320", y="90")



    number_1 = Button(tab, bg=cgray, text="1", width="10", height="3", borderwidth=4, relief=RAISED, command=lambda: key_input(1))
    number_2 = Button(tab, bg=cgray, text="2", width="10", height="3", borderwidth=4, relief=RAISED, command=lambda: key_input(2))
    number_3 = Button(tab, bg=cgray, text="3", width="10", height="3", borderwidth=4, relief=RAISED, command=lambda: key_input(3))
    number_4 = Button(tab, bg=cgray, text="4", width="10", height="3", borderwidth=4, relief=RAISED, command=lambda: key_input(4))
    number_5 = Button(tab, bg=cgray, text="5", width="10", height="3", borderwidth=4, relief=RAISED, command=lambda: key_input(5))
    number_6 = Button(tab, bg=cgray, text="6", width="10", height="3", borderwidth=4, relief=RAISED, command=lambda: key_input(6))
    number_7 = Button(tab, bg=cgray, text="7", width="10", height="3", borderwidth=4, relief=RAISED, command=lambda: key_input(7))
    number_8 = Button(tab, bg=cgray, text="8", width="10", height="3", borderwidth=4, relief=RAISED, command=lambda: key_input(8))
    number_9 = Button(tab, bg=cgray, text="9", width="10", height="3", borderwidth=4, relief=RAISED, command=lambda: key_input(9))
    blank_1 = Button(tab, bg=cgray, width="10", height="3", borderwidth=4, relief=RAISED, state=DISABLED)
    number_0 = Button(tab, bg=cgray, text="0", width="10", height="3", borderwidth=4, relief=RAISED, command=lambda: key_input(0))
    blank_2 = Button(tab, bg=cgray, width="10", height="3", borderwidth=4, relief=RAISED, state=DISABLED)
    cancel = Button(tab, bg=cred, text="CANCEL", width="15", height="3", borderwidth=4, relief=RAISED, command=exit)
    clear = Button(tab, bg=cyellow, text="CLEAR", width="15", height="3", borderwidth=4, relief=RAISED, command=clear)
    if tab == ATM_app:
        ok = Button(tab, bg=cgreen, text="OK", width="15", height="3", borderwidth=4, relief=RAISED, command=open)
    else:
        ok = Button(tab, bg=cgreen, text="OK", width="15", height="3", borderwidth=4, relief=RAISED, command=draw)

    # key locations
    number_1.place(x="290", y="200")
    number_2.place(x="390", y="200")
    number_3.place(x="490", y="200")
    number_4.place(x="290", y="270")
    number_5.place(x="390", y="270")
    number_6.place(x="490", y="270")
    number_7.place(x="290", y="340")
    number_8.place(x="390", y="340")
    number_9.place(x="490", y="340")
    blank_1.place(x="290", y="410")
    number_0.place(x="390", y="410")
    blank_2.place(x="490", y="410")
    cancel.place(x="600", y="200")
    clear.place(x="600", y="270")
    ok.place(x="600", y="340")


# SCREEN SIZE FOR THE APPLICATION
ATM_app = atm.Tk()
ATM_app.geometry("900x500+230+110")
ATM_app.title("ATM")
btn_comp(ATM_app)
ATM_app.configure(bg=cblue)


ATM_app.mainloop()
