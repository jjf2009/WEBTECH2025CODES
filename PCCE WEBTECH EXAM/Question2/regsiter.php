<?php
header("Content-Type: application/json");

$data = json_decode(file_get_contents("php://input"), true);

if (
    empty($data['fullname']) ||
    empty($data['rollno']) ||
    empty($data['email']) ||
    empty($data['password']) ||
    empty($data['confirmpassword'])
) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "All fields are mandatory"
    ]);
    exit;
}

if ($data['password'] !== $data['confirmpassword']) {
    http_response_code(422);
    echo json_encode([
        "status" => "error",
        "message" => "Passwords do not match"
    ]);
    exit;
}

http_response_code(200);
echo json_encode([
    "status" => "success",
    "message" => "Student registered successfully"
]);
