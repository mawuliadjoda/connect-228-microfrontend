import React, { useState } from 'react'
import RadioGroup from '../radio/RadioGroup';
import Radio from '../radio/Radio';
import Plan from './Plan';
import { BadgePercent, Sparkle, Gem, Crown, ArrowRight } from "lucide-react"
import { useNavigate } from 'react-router-dom';


const NAVIGATION: Map<string, string> = new Map([
    ['connect-pharma', '/connect-pharma'],
    ['228 Market', '/marketplace'],
    ['medical-appointment', '/medical-appointment']
]);

const Selection = () => {
    const [plan, setPlan] = useState("");
    const navigate = useNavigate();

    const handleSelection = () => {
        console.log(NAVIGATION.get(plan));
        // navigate(NAVIGATION.get(plan)!);
        // window.location.replace('https://connect-228.com');
        window.open('https://connectpharma-228.com', "_blank") 
    }

    return (
        <main className="min-h-screen flex flex-col items-center justify-center">
            <h2 className="text-2xl font-bold tracking-tight">Veuillez sélectionner un service</h2>
            <hr className="my-3 w-56" />
            <RadioGroup value={plan} onChange={(e) => { setPlan(e.target.value); }}>
                <div className="flex gap-4 justify-center flex-col">
                    <Radio value="connect-pharma">
                        <Plan
                            icon={<Gem />}
                            title="Pharmacies connectées"
                            features={["Voir les pharmacies proches de vous"]}
                            url="/connect-pharma"
                        />
                    </Radio>

                    <Radio value="medical-appointment">
                        <Plan
                            icon={<Gem />}
                            title="Prendre un RDV médical"
                            features={["Prendre un rdv dans un centre médical"]}
                            url="/medical-appointment"
                        />
                    </Radio>

                    <Radio value="228 Market">
                        <Plan
                            icon={<Sparkle />}
                            title="228 Market"
                            features={["Voir les annonces autour de moi"]}
                            url="/marketplace"
                        />
                    </Radio>

                </div>
            </RadioGroup>

            <hr className="my-3 w-56" />

            {
                plan ?


                    <div>
                        <div /><div />
                        <button className={`
                        flex gap-4 items-center px-6 py-3 rounded-lg
                        bg-violet-800 hover:bg-violet-700
                        font-semibold text-lg text-white`}
                            onClick={handleSelection}>
                            Continuer vers {plan}
                            <ArrowRight />
                        </button>
                    </div>

                    :

                    ''
            }

        </main>
    )
}

export default Selection
