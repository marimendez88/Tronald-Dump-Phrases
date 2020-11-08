
import { toRefs, reactive } from 'vue';
import axios from 'axios'


export interface QuoteType {
      quoteId: string;
      tags: string[];
      createdAt: string;
      quoteText: string;
      sourceUrl: string;
}
export function useQuotesSpace(){

    const apiClient = axios.create({
      baseURL: `https://tronalddump.io`,
      withCredentials: false, 
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })

    const quotesProperties: any = reactive({
    textWrote: undefined, 
    totalResults: 0,
    quotes: []
    });

    // const getRandomMeme = () => {
    //   return apiClient.get('/random/meme')
    // };

    const shapeQuote = (quotesUnshaped: any[]): QuoteType[] => {
    let tempArray: QuoteType [] = [];
    
    quotesUnshaped.forEach(quoteUnshaped => {
      tempArray = [...tempArray, 
        {
          quoteId: quoteUnshaped.quote_id,
          tags: quoteUnshaped.tags,
          createdAt: quoteUnshaped.created_at.slice(0,10),
          quoteText: quoteUnshaped.value,
          sourceUrl: quoteUnshaped._embedded.source[0].url
        }
      ];
    })
      return tempArray
  }

    const getQuoteByQuery =  async (term: string) => {
        return apiClient.get(`/search/quote?query=${term}`)
    };

    const searchByTerm = async ()  => {

      if(quotesProperties.textWrote) {

      const temp = await  getQuoteByQuery(quotesProperties.textWrote).then(response => {
              quotesProperties.totalResults = response.data.count;
              return shapeQuote(response.data._embedded.quotes);
        });
        quotesProperties.quotes = temp;
      }
    }
    return {...toRefs(quotesProperties), searchByTerm}
  }