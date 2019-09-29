function TableList(Class, ItemSlotRows, Spec = null) {
    this.Class = Class;
    this.ItemSlotRows = ItemSlotRows;
    this.Spec = Spec;
};

function WowheadLink(Id, Name, Type = linkType.item) {
    this.Id = Id;
    this.Name = Name;
    this.Type = Type;
};

function ItemSlotRow(Slot, Best, Second, Third, Enchant) {
    this.Slot = Slot;
    this.Best = Best;
    this.Second = Second;
    this.Third = Third;
    this.Enchant = Enchant;
};