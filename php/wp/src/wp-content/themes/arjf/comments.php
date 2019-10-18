<?php 
    if(
        !empty($_SERVER['SCRIPT_FILENAME']) && 
        'comments.php' == basename($_SERVER['SCRIPT_FILENAME'])
    ) {
	die('You can not access this page directly!');
    }

    if($comments) {
        $rendered = 0;
        foreach($comments as $comment) {
?>
        <?php 
            if((int)$comment->comment_approved !== 0) {  
                if (empty($rendered) === true) {
        ?>
    <h3>Comments</h3>
        <?php
                }
        ?>
    <div class="panel panel-default">
        <div class="panel-heading">
            <?php comment_type(); ?> by <?php comment_author_link(); ?> on <?php comment_date(); ?> at <?php comment_time(); ?>
        </div>
        <div class="panel-body">
            <?php comment_text(); ?>
        </div>
    </div>
<?php
                $rendered++;
            }
        }
    } 
?>
<?php if(comments_open()) {
    if(get_option('comment_registration') && !$user_ID) {
?>
    <p>You must be <a href="<?php echo get_option('siteurl'); ?>/wp-login.php?redirect_to=<?php echo urlencode(get_permalink()); ?>">logged in</a> to post a comment.</p>
<?php 
    } else { 
?>
    <h3>Post a comment</h3>
    <form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post" id="comments" class="well form-horizontal">
    <?php 
        if($user_ID) { 
    ?>
        <p>Logged in as <a href="<?=get_option('siteurl')?>/wp-admin/profile.php"><?=$user_identity?></a>. <a href="<?=get_option('siteurl')?>/wp-login.php?action=logout" title="Log out of this account">Log out &raquo;</a></p>
    <?php 
        } else { 
    ?>
        <div class="form-group">
            <label class="col-sm-2 control-label" for="author">Name <?php if($req) echo "(required)"; ?></label>
            <div class="col-sm-10">
                <input type="text" name="author" id="author" class="form-control" value="<?=$comment_author?>" size="22" tabindex="1" />
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label" for="email">Mail <?php if($req) echo "(required)"; ?></label>
            <div class="col-sm-10">
                <input type="text" name="email" id="email" class="form-control" value="<?php echo $comment_author_email; ?>" size="22" tabindex="2" />
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label" for="url">Website</label>
            <div class="col-sm-10">
                <input type="text" name="url" id="url" class="form-control" value="<?=$comment_author_url?>" size="22" tabindex="3" />
            </div>
        </div>
    <?php } ?>
        <div class="form-group">
            <div class="col-sm-12">
                <textarea name="comment" id="comment" class="form-control" rows="10" tabindex="4"></textarea>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-12">
                <button class="btn btn-primary pull-right" type="submit">Submit Comment</button>
            </div>
        </div>
        <input type="hidden" name="comment_post_ID" value="<?=$id?>" /></p>
        <?php do_action('comment_form', $post->ID); ?>
    </form>
    <?php } ?>
<?php 
    } else { 
?>
    <p>The comments are closed.</p>
<?php 
    }

