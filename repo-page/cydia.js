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
        text: "Where Do you Want to Get This Tweak From ?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Cydia',
        cancelButtonText: 'Zebra',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Cydia',
      '<a href="cydia://api/share#/source=https://repo.cocotweaks.net">Open Cydia</a>',
      'success'
    )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cocox',
            '<a href="zbra://sources/add/https://repo.cocotweaks.net">Open Zebra</a>',
            'success'
          )
        }
      })
  }

  