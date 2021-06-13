function eliminar(id){
		swal({
	  title: "seguro que desea eliminar el registro?",
	//  text: "Once deleted, you will not be able to recover this imaginary file!",
	  icon: "warning",
	  buttons: true,
	  dangerMode: true,
	})
	.then((OK) => {
	  if (OK) {
			$.ajax({
				url:"/eliminar/"+id,
				success :function(res){
					console.log(res);
				}
			});
	    swal("El registro ha sido eliminado", {
	      icon: "success",
	    }).then((ok)=>{
			if(ok){
				location.href="/listar";
			}
	});
	  } else {
	    swal("Operacion cancelada");
	  }
	});
}