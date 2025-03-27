<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$pdo = new PDO("mysql:host=db;dbname=tasks_db", "user", "password", [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
]);

$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents("php://input"), true);

switch ($method) {
    case 'POST':
        $stmt = $pdo->prepare("INSERT INTO tasks (title, description, status, created_at, updated_at) VALUES (?, ?, ?, NOW(), NOW())");
        $stmt->execute([$input['title'], $input['description'], 'pendente']);
        echo json_encode(["message" => "Tarefa criada com sucesso"]);
        break;
    
    case 'GET':
        $stmt = $pdo->query("SELECT * FROM tasks");
        echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
        break;
    
    case 'PUT':
        parse_str(file_get_contents("php://input"), $put_vars);
        $stmt = $pdo->prepare("UPDATE tasks SET title=?, description=?, status=?, updated_at=NOW() WHERE id=?");
        $stmt->execute([$put_vars['title'], $put_vars['description'], $put_vars['status'], $put_vars['id']]);
        echo json_encode(["message" => "Tarefa atualizada"]);
        break;
    
    case 'DELETE':
        $stmt = $pdo->prepare("DELETE FROM tasks WHERE id=?");
        $stmt->execute([$input['id']]);
        echo json_encode(["message" => "Tarefa deletada"]);
        break;
}
