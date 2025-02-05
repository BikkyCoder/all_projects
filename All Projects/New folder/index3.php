<?php
            $services = ['Food', 'Toys', 'Beauty Products', 'Clothing', 'Electronics', 'Books', 'Furniture', 'Shoes', 'Jewelry', 'Bags', 'Fitness', 'Groceries', 'Accessories', 'Tools', 'Gardening', 'Stationery', 'Pet Supplies', 'Health', 'Music', 'Games'];
            $total_services = count($services);
            foreach ($services as $index => $service) {
                $angle = ($index / $total_services) * 360;
                echo "<div class='service-item' style='transform: rotate({$angle}deg) translate(120px) rotate(-{$angle}deg);'>{$service}</div>";
            }
            ?>