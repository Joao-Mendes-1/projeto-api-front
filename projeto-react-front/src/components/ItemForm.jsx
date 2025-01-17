import React, { useState } from 'react';
import styles from '../styles/components/ItemForm.module.css'; // Importa o módulo CSS para estilização

function ItemForm({ onAddItem }) {
  // Estados locais para gerenciar os valores dos campos do formulário
  const [nome, setNome] = useState('');
  const [autor, setAutor] = useState('');
  const [ano, setAno] = useState('');
  const [genero, setGenero] = useState('');
  const [imagem, setImagem] = useState('');

  // Função chamada ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)

    // Cria um novo objeto com os valores dos campos
    const newItem = { nome, autor, ano, genero, imagem };

    onAddItem(newItem); // Passa o novo item para o manipulador recebido por props

    // Reseta os valores dos campos após adicionar o item
    setNome('');
    setAutor('');
    setAno('');
    setGenero('');
    setImagem('');
  };

  return (
    <div className={styles.itemFormContainer}> {/* Container principal do formulário */}
      <h2 className={styles.itemFormTitle}>Adicionar Novo Livro</h2>
      <form onSubmit={handleSubmit} className={styles.itemForm}> {/* Início do formulário */}
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite o nome do item"
          required
          className={styles.itemFormInput}
        />
        <input
          type="text"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
          placeholder="Digite o autor"
          required
          className={styles.itemFormInput}
        />
        <input
          type="number"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
          placeholder="Digite o ano"
          required
          className={styles.itemFormInput}
        />
        <input
          type="text"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
          placeholder="Digite o gênero"
          required
          className={styles.itemFormInput}
        />
        <input
          type="text"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
          placeholder="Digite a URL da imagem"
          required
          className={styles.itemFormInput}
        />
        <button type="submit" className={styles.itemFormButton}> {/* Botão de envio do formulário */}
          Adicionar
        </button>
      </form>
    </div>
  );
}

export default ItemForm;
