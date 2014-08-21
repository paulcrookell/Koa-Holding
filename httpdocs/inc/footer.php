        
        <footer id="footer" data-top="margin-bottom: -40px;" data--40-top="margin-bottom: 0px;">
        	<p>teamkoa.co | YOUR ONLINE ADVENTURE PLATFORM</p>
        </footer>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="_assets/js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <?php if($pagetitle == "Upload") : ?>
        <script src="_assets/js/vendor/jquery.ui.widget.js"></script>

        <script src="_assets/js/vendor/load-image.min.js"></script>
        <!-- The Canvas to Blob plugin is included for image resizing functionality -->
        <script src="_assets/js/vendor/canvas-to-blob.min.js"></script>

        <!-- The Iframe Transport is required for browsers without support for XHR file uploads -->
		<script src="_assets/js/vendor/jquery.iframe-transport.js"></script>
		<!-- The basic File Upload plugin -->
		<script src="_assets/js/vendor/jquery.fileupload.js"></script>
		<!-- The File Upload processing plugin -->
		<script src="_assets/js/vendor/jquery.fileupload-process.js"></script>
		<!-- The File Upload image preview & resize plugin -->
		<script src="_assets/js/vendor/jquery.fileupload-image.js"></script>
		<!-- The File Upload audio preview plugin -->
		<script src="_assets/js/vendor/jquery.fileupload-audio.js"></script>
		<!-- The File Upload video preview plugin -->
		<script src="_assets/js/vendor/jquery.fileupload-video.js"></script>
		<!-- The File Upload validation plugin -->
		<script src="_assets/js/vendor/jquery.fileupload-validate.js"></script>
		<!-- Custom cropping -->
		<script src="_assets/js/vendor/jquery.Jcrop.min.js"></script>
		<?php endif; ?>		

        
        <script src="_assets/js/global.js"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>
    </body>
</html>