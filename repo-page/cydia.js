function pop(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '✅',
        text: "Where do you want to get this Tweak from ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Cydia',
        cancelButtonText: 'Cocox',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Cydia',
      '<a href="cydia://api/share#/source=https://repo.cocotweaks.net">Open cydia</a>',
      'success'
    )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cocox',
            '<a href="cox://sources/add/https://repo.cocotweaks.net">Open cocox</a>',
            'success'
          )
        }
      })
  }

  