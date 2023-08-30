<?php
/**
 * Plugin Name:       Store plugin
 * Description:       Store plugin.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       store-plugin
 *
 * @package           create-block
 */

function store_plugin_enqueue_assets()
{
    $asset_file = include(plugin_dir_path(__FILE__) . 'build/index.asset.php');
    wp_enqueue_script(
        'store_plugin-script',
        plugins_url('build/index.js', __FILE__),
        $asset_file['dependencies'],
        $asset_file['version']
    );
}

add_action('enqueue_block_editor_assets', 'store_plugin_enqueue_assets');
