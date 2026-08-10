import re
import pymorphy2

morph = pymorphy2.MorphAnalyzer()

def get_words(lines: str):
    words = []
    line = re.findall(r'[А-яЁё][а-яё\-]*', lines)
    for word in line:
        words.append(word.lower())

    return words

def to_normal(words: list):
    normal_words = []
    for word in words:
        n_word = morph.parse(word)[0].normal_form
        normal_words.append(n_word)

    return normal_words