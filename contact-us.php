<?php
$title = "Contact CAPP Int.";
include 'includes/header.php';
include 'includes/navigation.php';
?>

<div style="margin-top: 30px;">
  <div class="title-box">
    <h2 class="title">Get In Touch</h2>
  </div>
  <div class="content yellow" style="background-image: url('images/content-bg-no-trim.png');">
    <p style="margin-top: 30px; color: white;">I would like to hear from you. Drop me a line if you have any questions.<br>
      I am on the road a lot but I will get back to you as soon as I can.<br>
      Alternatively, you can call me at this number:<br>
      Dan Ewert <a href="tel:1-503-720-5580" style="color: rgb(218, 222, 229); font-family: Times;">503-720-5580</a><br>
      Thank You.</p>
    <form role="form" id="contactForm" class="contact-form" data-toggle="validator" class="shake" style="margin-top: 30px;">
      <div class="form-group">
        <div class="controls">
          <input type="text" id="name" class="form-control" placeholder="Name" required data-error="Please enter your name">
          <div class="help-block with-errors"></div>
        </div>
      </div>
      <div class="form-group">
        <div class="controls">
          <input type="email" class="email form-control" id="email" placeholder="Email" required data-error="Please enter your email">
          <div class="help-block with-errors"></div>
        </div>
      </div>
      <div class="form-group">
        <div class="controls">
          <input type="text" id="msg_subject" class="form-control" placeholder="Subject" required data-error="Please enter your message subject">
          <div class="help-block with-errors"></div>
        </div>
      </div>
      <div class="form-group">
        <div class="controls">
          <textarea id="message" rows="7" placeholder="Message" class="form-control" required data-error="Write your message"></textarea>
          <div class="help-block with-errors"></div>
        </div>
      </div>
      <button type="submit" id="submit" class="btn btn-default yellow"></i> Send Message</button>
      <div id="msgSubmit" class="h3 text-center hidden"></div>
      <div class="clearfix"></div>
    </form>
  </div>
</div>

<?php
include 'includes/footer.php';
?>
<script type="text/javascript" src="js/form-validator.min.js"></script>
<script type="text/javascript" src="js/contact-form-script.js"></script>
