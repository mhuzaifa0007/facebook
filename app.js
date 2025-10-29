function post() {
    var description = document.getElementById("description");
    var image = document.getElementById("image");
    var postContainer = document.getElementById("post");

    if (image.files && image.files[0]) {
        var file = image.files[0];
        var imageUrl = URL.createObjectURL(file);

        postContainer.innerHTML += `
            <div class="postCard px-4 py-2 mb-2">
                <div class="postHeader d-flex justify-content-between">
                    <div class="firstSec d-flex gap-3">
                        <div class="firstSec-image">
                            <img src="E5nNrU3bcBc-S2p4Y&_nc_zt=23&_nc_ht=scontent.fkhi11-1.fna&_nc_gid=EvJApJDY9i-XyJK2IsoT2A&oh=00_AfZDjEY4Dil6DBtQehRHqqJXbXNYLxRwUPllIro5LTiGzA&oe=68E06685"
                                 alt="" height="40px" width="40px">
                        </div>
                        <div class="postAcc-Date">
                            <p class="para heading">
                                Ak Khola <span style="color: #0866ff;">Follow</span>
                            </p>
                            <p>September 29 at 10:22 AM <span><i class="fa-solid fa-globe"></i></span></p>
                        </div>
                    </div>
                    <div class="icons">
                        <i class="fa-solid fa-grip"></i>
                        <i class="fa-solid fa-x"></i>
                    </div>
                </div>

                <div class="desc">
                    ${description.value} <span style="color: #0866ff;">see more...</span>
                </div>

                <div class="imageBox">
                    <img src="${imageUrl}" alt="" height="250px" width="250px">
                </div>
            </div>
        `;

        // Clear the inputs
        description.value = "";
        image.value = "";
    } else {
        alert("Please select an image!");
    }
}
