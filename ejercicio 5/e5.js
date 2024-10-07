const libro1 = {
    titulo: 'Geronimo Stilton en el Reino de la fantasia',
    autor: 'Elisabetta Dami',
    paginas: 128,
    resumen: function() {
        return `${this.titulo} escrito por ${this.autor} tiene ${this.paginas} páginas`
    }
};

const libro2 = {
    titulo: 'El fantasma de cera',
    autor: 'Emilio Calderón',
    paginas: 89,
    resumen: function() {
        return `${this.titulo} escrito por ${this.autor} tiene ${this.paginas} páginas`
    }
};

const libro3 = {
    titulo: '¡Cómo molo! (Otra de Manolito Gafotas)',
    autor: 'Elvira Lindo',
    paginas: 123,
    resumen: function() {
        return `${this.titulo} escrito por ${this.autor} tiene ${this.paginas} páginas`
    }
};

const libros = [libro1, libro2, libro3]

libros.forEach(libro => {
    console.log(libro.resumen());
});