__author__ = 'pique'


import json
import sys


def main():
    filename = sys.argv[1]
    file = open(filename, 'r')
    subscribers = json.loads(file.read())
    print ', '.join([s['email'] for s in subscribers])
    print len(subscribers)


if __name__ == '__main__':
    main()