<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $response = array(
        'name' => 'John Doe',
        'email' => 'john.doe@example.com',
        'phone' => '+1-234-567-8900',
        'city' => 'New York'
    );
    
    http_response_code(200);
    echo json_encode($response);
}
elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents('php://input');
    $data = json_decode($input, true);
    
    $response = array(
        'status' => 'success',
        'message' => 'Data sent successfully!',
        'received_data' => $data
    );
    
    http_response_code(201);
    echo json_encode($response);
}

else {
    http_response_code(405);
    echo json_encode(array('error' => 'Method not allowed'));
}
?>