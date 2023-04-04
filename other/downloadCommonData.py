import urllib.request

def downloadSound():
    # http://games255.512.jp/pokewav_DL/index.html

    for num in range(1, 650):
        if (num <= 386):
            num3 = str(num).zfill(3)
            url='http://games255.512.jp/pokewav/' + num3 + '.wav'

            num4 = str(num).zfill(4)
            saveName= num4 + '.wav'

        elif (num > 386):
            num3 = str(num).zfill(3)
            url='http://games255.512.jp/pokewav/' + num3 + '.mp3'

            num4 = str(num).zfill(4)
            saveName= num4 + '.mp3'

        urllib.request.urlretrieve(url, './sound/' + saveName)



def downloadImage():
    for num in range(1, 650):
        
        #https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
        urlfrD ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + str(num) + '.png'

        num4 = str(num).zfill(4)
        saveNamefrD = 'frD' + num4 + '.png'

        urllib.request.urlretrieve(urlfrD, saveNamefrD)
        
        #https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png
        urlfrS ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + str(num) + '.png'

        num4 = str(num).zfill(4)
        saveNamefrS = 'frS' + num4 + '.png'

        urllib.request.urlretrieve(urlfrS, saveNamefrS)

        #https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png
        urlOaD ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + str(num) + '.png'

        num4 = str(num).zfill(4)
        saveNameOaD = 'oaD' + num4 + '.png'

        urllib.request.urlretrieve(urlOaD, saveNameOaD)

        #https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1.png
        urlOaS ='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/' + str(num) + '.png'

        num4 = str(num).zfill(4)
        saveNameOaS = 'oaS' + num4 + '.png'

        urllib.request.urlretrieve(urlOaS, saveNameOaS)



import requests
import json

def getPokeNameJson():

    pokeNamesList = {}

    for num in range(1, 650):
        url = "https://pokeapi.co/api/v2/pokemon-species/" + str(num)
        response = requests.get(url)
        pokeData = response.json()

        for names in pokeData['names']:
            if names['language']['name'] == "ja":
                pokeName = names["name"]
                break

        num4 = str(num).zfill(4)
        pokeNamesList[num4] = pokeName

        print(num4 + " : " + pokeName)

    with open('./pokeNamesList.json', 'w', encoding="utf-8") as f:
        json.dump(pokeNamesList, f, ensure_ascii=False)



def getPokeTypeJson():

    pokeTypesList = {}

    for num in range(1, 650):
        url = "https://pokeapi.co/api/v2/pokemon/" + str(num)
        response = requests.get(url)
        pokeData = response.json()

        type1 = pokeData['types'][0]['type']['name']
        if len(pokeData['types']) == 2:
            type2 = pokeData['types'][1]['type']['name']
        else:
            type2 = type1

        num4 = str(num).zfill(4)
        pokeTypesList[num4] = [type1, type2]

        print(num4)

    with open('./pokeTypesList.json', 'w', encoding="utf-8") as f:
        json.dump(pokeTypesList, f, ensure_ascii=False)



print("Start")

#downloadSound()
#downloadImage()
#getPokeNameJson()
getPokeTypeJson()

print("End")