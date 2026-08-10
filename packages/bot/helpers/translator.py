from deep_translator import GoogleTranslator

def translator_from_russian(phrase: str):
    translator = GoogleTranslator(source='russian', target='english')
    result = translator.translate(phrase)
    return result

def translator_from_english(phrase: str):
    translator = GoogleTranslator(source='english', target='russian')
    result = translator.translate(phrase)
    return result
