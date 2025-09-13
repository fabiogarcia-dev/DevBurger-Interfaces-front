import { useEffect, useState } from "react";
import { Container, Banner, CategoryMenu, ProductsContainer, CategoryButton } from "./styles";
import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";

/**Busca categorias e produtos do backend.
Permite filtrar produtos por categoria selecionada.
Atualiza a URL com a categoria escolhida.
Renderiza:
Banner de destaque
Menu de categorias
Lista de produtos filtrados
Cardapio interativo */

export function Menu() {
    const [categories, setCategories] = useState([]);  //lista de categorias do menu.
    const [products, setProducts] = useState([]);  //lista de produtos recebidos da API.
    const [filteredProducts, setFilteredProducts] = useState([]);  //produtos filtrados pela categoria selecionada.

    const navigate = useNavigate();

    const { search } = useLocation();  //pega a query string da URL (?categoria=1, por exemplo).

    const queryParams = new URLSearchParams(search);  //facilita ler parâmetros específicos da URL.

    /**Inicializa a categoria ativa:
Se houver parâmetro categoria na URL, usa esse valor.
Caso contrário, seleciona 0 → significa "Todas" as categorias. */

    const [activeCategory, setActiveCategory] = useState(() => {
        const categoryId = +queryParams.get('categoria');
        if (categoryId) {
            return categoryId;
        }
        return 0;
    });

    useEffect(() => {  //Executa uma vez ao montar o componente.
        async function loadCategories() {  //busca categorias do backend e adiciona a opção "Todas" no início.
            const { data } = await api.get('/categories');

            const newCategories = [{ id: 0, name: 'Todas' }, ...data];

            setCategories(newCategories);
        }

        async function loadProducts() {  //busca produtos, formata o preço e salva no estado.
            const { data } = await api.get('/products');
            const newProducts = data.map((product) => ({ currencyValue: formatPrice(product.price), ...product, }));

            setProducts(newProducts);
        }

        loadCategories();
        loadProducts();
    }, []);
    /**Sempre que os produtos ou a categoria ativa mudarem: */

    useEffect(() => {
        if (activeCategory === 0) {
            setFilteredProducts(products);
        } else {
            const newFilteredProducts = products.filter(product => product.category_id === activeCategory);
            setFilteredProducts(newFilteredProducts);
        }
    }, [products, activeCategory])
    return (
        <Container>
            <Banner>
                <h1>O MELHOR
                    <br />
                    HAMBURGUER
                    <br />
                    ESTÁ AQUI
                    <span>Esse cardápio esta irresistível</span>
                </h1>

            </Banner>
            <CategoryMenu>
                { /**Renderiza botões para cada categoria.
$isActiveCategory → destaca a categoria selecionada.
onClick:
Atualiza a URL com o parâmetro ?categoria=id.
Atualiza o estado activeCategory. */}
                {categories.map(category => (
                    <CategoryButton key={category.id}
                        $isActiveCategory={category.id === activeCategory}
                        onClick={() => {
                            navigate(
                                {
                                    pathname: '/cardapio',
                                    search: `?categoria=${category.id}`
                                },
                                {
                                    replace: true
                                },
                            )
                            setActiveCategory(category.id)
                        }}
                    >{category.name}</CategoryButton>
                ))}
            </CategoryMenu>
            <ProductsContainer>
                {filteredProducts.map(product => (
                    <CardProduct product={product} key={product.id} />
                ))}

            </ProductsContainer>
        </Container>
    );
}