$( document ).ready(function() {
    function hideLoader() {
        $('#loading').hide();
    }    
    setTimeout(hideLoader, 1500);
    // Music
    const stgs = document.getElementById("stgs");
    const modal = document.getElementById("floppy");
    const btn = document.getElementById("play");
    let isPlaying = false;
    function togglePlay() {
        return isPlaying ? stgs.pause() : stgs.play();
    };
    stgs.onplaying = function() {
        isPlaying = true;
    };
    stgs.onpause = function() {
        isPlaying = false;
    };
    btn.onclick = function() {
        togglePlay();
        btn.src = "/images/buttons/clicked/floppy_disk_drive.png";
        modal.style.display = "block";
    }
    modal.onclick = function() {
        togglePlay();
        btn.src = "/images/buttons/unclicked/floppy_disk_drive.png";
        modal.style.display = "none";
    }  
    $(':focus').blur()
    $('.options').on('focus', 'li', function() {
        $this = $(this);
        $this.addClass('active').siblings().removeClass();
        $this.closest('.options').scrollTop($this.index() * $this.outerHeight());
    }).on('keydown', 'li', function(e) {
        $this = $(this);
        if (e.keyCode == 40) {        
            $this.next().focus();
            return false;
        } else if (e.keyCode == 38) {        
            $this.prev().focus();
            return false;
        } else if (e.keyCode == 13) {
            window.location.href = $('.active').attr('href');
        }
    }).find('li').first().focus();
    const $first = $('li:first', 'ul');
    const $last = $('li:last', 'ul');
    $("#next").click(function () {
        let $next;
        const $selected = $(".active");
        $next = $selected.next('li').length ? $selected.next('li') : $first;
        $selected.removeClass("active");
        $next.addClass('active');
    });
    $("#prev").click(function () {
        let $prev;
        const $selected = $(".active");
        $prev = $selected.prev('li').length ? $selected.prev('li') : $last;
        $selected.removeClass("active");
        $prev.addClass('active');
    });
    $("#return").click(function () {
        window.location.href = $('.active').attr('href');
    });
});