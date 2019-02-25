<?php
/**
 * Plugin Name: Custom-header
 * Author: Zack
 * Version: 1.0.0
 */
function loadBlockFileHeader() {
  wp_enqueue_script(
    'my-handle-header',
    plugin_dir_url(__FILE__) . 'custom-header.js',
    array('wp-blocks', 'wp-i18n', 'wp-editor'),
    true
  );
}
 
add_action('enqueue_block_editor_assets', 'loadBlockFileHeader');
/* To make your block "dynamic" uncomment
  the code below and in your JS have your "save"
  method return null
*/
/*
function borderBoxOutput($props) {
  return '<h3 style="border: 5px solid' . $props['color'] . '">' . $props['content'] . '</h3>';
}
register_block_type( 'brad/border-box', array(
  'render_callback' => 'borderBoxOutput',
) );
*/
/* To Save Post Meta from your block uncomment
  the code below and adjust the post type and
  meta name values accordingly. If you want to
  allow multiple values (array) per meta remove
  the 'single' property.
*/
/*
function myBlockMeta() {
  register_meta('post', 'color', array('show_in_rest' => true, 'type' => 'string', 'single' => true));
}
add_action('init', 'myBlockMeta');
*/