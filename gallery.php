<?php
$title = "Event Gallery";
include 'includes/header.php';
include 'includes/navigation.php';
?>

<div style="margin-top: 30px;">
  <div class="title-box">
    <h2 class="title">Gallery for Our Next Auction</h2>
  </div>
  <div class="content yellow" style="background-image: url('images/content-bg-no-trim.png');">
    <h3 style="font-family: 'Bowlby One SC', cursive;"><a href="upcoming-events.php" class="yellow">Learn more about the auction here!</a></h3>
    <div class="" id="gallery0">
      <!-- generateGallery() will add elements here -->
    </div>
  </div>
</div>
<!-- Modal -->
  <div class="modal fade" id="viewport" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">
          <img id="wImg" src="" class="img-responsive">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default yellow" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
<?php
include 'includes/footer.php';
?>
<script>
  $(document).ready(function() {
    generate2();
  });
</script>
