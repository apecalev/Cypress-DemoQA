import { urls, LocatorElements, Buttons, Results, Slider } from "../../variables/data";
import { page, widgetfunction, changeslidervalue } from "../../functions/Element";

describe('User is able to change slider value', () => {
    it('should change the slider value and verify it', () => {
        page()
        widgetfunction()
        changeslidervalue(50)
        
    });
  });
  