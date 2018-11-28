<?php get_header(); ?>
<?php the_breadcrumb(); ?>
<div id="main">
    <div id="content">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <h2><a href="<?php the_permalink(); ?>" title="<?php printf( __('Permalink to %s', 'your-theme'), the_title_attribute('echo=0') ); ?>" rel="bookmark"><?php the_title(); ?></a></h2>
        <h4>Posted on <?php the_time('F jS, Y') ?></h4>
        <p><?php the_excerpt(); ?></p>
        <hr><?php endwhile; ?>
        <a class="rss" href="?feed=rss2"></a>
        <?php else: ?>
        <p><?php _e('Sorry, no posts matched your criteria.'); ?></p><?php endif; ?>
    </div>
<?php get_sidebar(); ?>
</div>
<div id="delimiter">
</div>
<?php get_footer(); ?>

