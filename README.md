
NDEX Valet
==========
Browse and select NDEx networks through custom search queries

####Usage:
```
<html>

  <head>
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.0.2/react-with-addons.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.0.2/react-dom.js"></script>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
        <script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>


  <script src="CyFramework/build/CyFramework.js"></script>
    <script src="NDExStore/build/NDExStore.js"></script>
    <script src="NDExValet/build/NDExValet.js"></script>
  </head>

  <body>
    <div id='valet'></div>
    <script>
      var cyto = CyFramework.config([NDExStore, NDExValet])
      
      cyto.render(NDExValet, document.getElementById('valet'), {
        style: {
          height: '80%',
          width: '90%'
        },
        onLoad: function(networkList) {}
      })
    </script>
  </body>

</html>
```

Parameters
----------
- style: Override default css styles for Valet container
- onLoad: a function with a list of networks as a parameter. Called when load networks is clicked in the cart.
