function PowerUpCard({nombre, descripcion, simbolo}) {
    return(
        <section className="power-up-card">
            <h2>{nombre}</h2>
            <p>Descripcion: {descripcion}</p>
            <p>Simbolo: {simbolo}</p>
        </section>
    );
}

export default PowerUpCard