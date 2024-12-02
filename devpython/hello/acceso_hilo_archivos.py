import os
import threading
import time

def leerArchivo(x):
    filename = 'myfile'+str(x)+'.txt'
    if os.path.isfile(filename):
        with open(filename, 'r') as f:
            for line in f:
                print(line)
    else:
        print("archivo no existe :" + filename)

def threaded(n):
    threads = []
    for i in range(n):
        t = threading.Thread(target=leerArchivo, args=(i,))
        threads.append(t)
        t.start()
    for t in threads:
        t.join()

if __name__ == "__main__":
    start = time.time()
    threaded(4)
    end = time.time()
    print("Took: ", end - start)