<?php
    $build = $_POST['build'];

    // Build check
    if($build == "")
        header('Location: index.php');
    else
        header('Location: bloacks/model.php');