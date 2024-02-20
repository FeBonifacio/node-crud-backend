import { db } from "../db.js";

// CONTROLE DE ACESSO E ERRO

// q == query

// GET
export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    })
}

// POST
export const addUser = (req, res) => {
    const q = "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário cadastrato!");
    })
}

//UPDATE
export const updateUser = (req, res) => {
    const q = "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.status(err);

        return res.status(200).json("Usuario atualizado!");
    })
    
}

//DELETE
export const deleteUser = (req, res) => {
    const q = "DELETE FROM usuario WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuario deletado!");
    })
}