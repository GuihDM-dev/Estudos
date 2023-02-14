import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca='Ferrari' ano_lancamento={1952} />
                <Item marca='Lamborghini' ano_lancamento={1964} />
                <Item marca='Renault'  />
                <Item />
            </ul>
        </>
    )
}

export default List