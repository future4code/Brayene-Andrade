function calculaNota(ex, p1, p2) {

    let mediaPonderada = ((ex * 1) + (p1 * 2) + (p2 * 3)) / (1 + 2 + 3)

    if (mediaPonderada >= 9) {
        let conceito = "A"
        return conceito

    } else if (mediaPonderada < 9 && mediaPonderada >= 7.5) {
        let conceito = "B"
        return conceito

    } else if (mediaPonderada < 7.5 && mediaPonderada >= 6) {
        let conceito = "C"
        return conceito
      
    } else {
            let conceito = "D"
            return conceito
        }

    }