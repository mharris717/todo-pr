def print_help():
    print("This file prints out useful help info")
    print("Like This")
    print(add({'a': 5, 'b': 6}))


"""
Bunch of stuff
More stuff
Even more stuff
"""


def add(params: dict):
    return params['a'] + params['b']


print_help()
