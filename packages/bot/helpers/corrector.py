from nltk import word_tokenize

# чтение словаря
def get_dictionary(filename: str):
    file = open(filename, "r", encoding='windows-1251')
    lines = file.readlines()
    rus_dict = []

    for line in lines:
        rus_dict.append(line.strip())

    file.close()
    return rus_dict

# расстояние Левенштейна
def levenshtein_distance(s1: str, s2: str):
    if len(s1) > len(s2):
        s1, s2 = s2, s1

    distances = range(len(s1) + 1)
    for i2, c2 in enumerate(s2):
        distances_ = [i2+1]
        for i1, c1 in enumerate(s1):
            if c1 == c2:
                distances_.append(distances[i1])
            else:
                distances_.append(1 + min((distances[i1], distances[i1 + 1], distances_[-1])))
        distances = distances_
    return distances[-1]


# корректировка слов
def spelling_correction(sentence: str):
    splittedsentence = word_tokenize(sentence)
    vocwords = get_dictionary("packages/bot/helpers/russian.txt")
    for i,word in enumerate(splittedsentence):
        if (word not in vocwords and not word.startswith(('1', '2', '3', '4', '5', '6', '7', '8', '9', '0'))): # ignore digit
            levdistances = []
            new_vocwords = list(filter(lambda x: x[0].lower() == word[0].lower(), vocwords))
            for vocword in new_vocwords:
                levdistances.append(levenshtein_distance(word,vocword))
            splittedsentence[i] = new_vocwords[levdistances.index(min(levdistances))]
        else:
            splittedsentence[i] = word
    return ' '.join(splittedsentence)