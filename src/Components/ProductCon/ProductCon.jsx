import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";


const ProductCon = ({ handleIsActiveState, isActive, selectPlayer, selectedPlayers, removePlayer }) => {
    return (
        <div>
            <div className='flex justify-end -mt-9 md:-mt-11'>
                <div
                    className={`${isActive.available ? 'btnna active' : 'btnna'} p-3 lg:p-4`}

                    onClick={() => handleIsActiveState('Card')}
                >
                    Available
                </div>
                <div
                    className={`${isActive.available ? 'btnns' : 'btnns active'} p-3 lg:p-4`}
                    onClick={() => handleIsActiveState('Wishlist')}
                >
                    Selected ({selectedPlayers.length})
                </div>
            </div>
            {isActive.available ? (
                <Cart selectPlayer={selectPlayer} />
            ) : (
                <Wishlist
                    selectedPlayers={selectedPlayers}
                    removePlayer={removePlayer}
                    handleIsActiveState={handleIsActiveState}
                />
            )}
        </div>
    );
};

export default ProductCon;

