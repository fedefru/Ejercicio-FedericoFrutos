
function vendibles(params){
    let counts = {};
    let paresVendibles = 0;
    
    params.forEach(media => {
        counts[media] = (counts[media] || 0) + 1;        
    });

    for( valor in counts){
        const mediasVendibles = parseInt(counts[valor]/2); 
        paresVendibles += mediasVendibles;
    }

    console.log('pares de medias vendibles', paresVendibles);

    return paresVendibles;
}

vendibles([10,3,2,3,3,10,10,9,3,3,10]);

//Ejercicio medias vendibles Federico Frutos.

