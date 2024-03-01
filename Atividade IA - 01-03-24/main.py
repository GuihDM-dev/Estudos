def menu():
    print("Bem vindo a PobreFlix!")
    print("1. Filmes")
    print("2. Séries")
    print("3. Pesquisar")
    print("4. Sair")

def gera_lista(current_list):
    for i, item in enumerate(current_list, 1):
        print(f"{i}. {item}")

def pesquisa(filme, serie):
    pesquisa_termo = input("Digite sua busca: ").lower()

    retorno_filmes=[item for item in filme if pesquisa_termo in item.lower()]
    retorno_serie=[item for item in serie if pesquisa_termo in item.lower()]

    if retorno_filmes or retorno_serie:
        print("Resultados da pesquisa em Filmes:")
        gera_lista(retorno_filmes)

        print("")

        print("\nResultados da pesquisa em Séries:")
        gera_lista(retorno_serie)
    else:
        print("Nenhum resultado encontrado.")



def start():
    serie = ["Peaky Blinders", "Drive to Survive", "Dark", "Game of Thrones", "The Midnight Gospel"]
    filme = ["V de Vingaça", "Clube da Luta", "Inception", "Interestelar", "Oppenheimer"]
    current_list = filme

    while True:
        menu()
        choice = input(">> ")

        if choice == "1":
            current_list = filme
            gera_lista(current_list)
        elif choice == "2":
            current_list = serie
            gera_lista(current_list)
        elif choice == "3":
            pesquisa(filme, serie)
            print("")
            print("")
        elif choice == "4":
            print("Saindo. Até logo!")
            break
        else:
            print("Opção inválida. Escolha uma das opções.")
start()