import os
import time

def leerArchivo(x):
    filename = 'myfile'+str(x)+'.txt'
    if os.path.isfile(filename):
        with open(filename, 'r') as f:
            for line in f:
                print(line)
    else:
        print("file not exist :" + filename)

def sequential(n):
    for i in range(n):    
        leerArchivo(i)
        
if __name__ == "__main__":
    start = time.time()
    sequential(5)
    end = time.time()
    print("Took: ", end - start)