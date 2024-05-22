const mappings = {
// Section 2 mappings
    "2": 'Energy Management',
// '2.1': 'Combustion issues'
    '2.1': 'Combustion issues',
    // 2.11: 'Furnaces, Ovens & Directly Fired Operations',
    '2.11': 'Furnaces, Ovens & Directly Fired Operations',
    '2.111' :'Operations',
    '2.112': 'Hardware',
    '2.113': 'Maintenance',
    // 2.12: 'Boilers',
    '2.12': 'Boilers',
    '2.121': 'Operations',
    '2.122': 'Hardware',
    '2.123': 'Maintenance',
    '2.124': 'Blowdown',
    // 2.13: 'Fuel Switching',
    '2.13': 'Fuel Switching',
    '2.131': 'Electric to Fossil Fuel',
    '2.132': 'Fossil Fuel to Electric',
    '2.133': 'Alternative Fuel',
    '2.139': 'Miscellaneous',
// 2.2: 'Thermal Systems'
    '2.2': 'Thermal Systems',
    // 2.21: 'Steam',
    '2.21': 'Steam',
    '2.211': 'Traps',
    '2.212': 'Condensate',
    '2.213': 'Leaks and Insulation',
    '2.214': 'Distillation',
    '2.215': 'Maintenance',
    '2.216': 'Operations',
    '2.219': 'Miscellaneous',
    // 2.22: 'Heating',
    '2.22': 'Heating',
    '2.221': 'Operations',
    '2.222': 'Hardware',
    // 2.23: 'Heat Treating',
    '2.23': 'Heat Treating',
    '2.231': 'General',
    // 2.24: 'Heat Recovery',
    '2.24': 'Heat Recovery',
    '2.241': 'Flue Gas - Recuperation',
    '2.242': 'Flue Gas - Other Uses',
    '2.243': 'Heat Recovery from Specific Equipment',
    '2.244': 'Other Process Waste Heat',
    '2.249': 'Miscellaneous',
    // 2.25: 'Heat Containment',
    '2.25': 'Heat Containment',
    '2.251': 'Insulation',
    '2.252': 'Isolation',
    '2.253': 'Infiltration',
    // 2.26: 'Cooling',
    '2.26': 'Cooling',
    '2.261': 'Cooling Towers',
    '2.262': 'Chillers and Refrigeration',
    '2.269': 'Miscellaneous',
    // 2.27: 'Drying',
    '2.27': 'Drying',
    '2.271': 'Use of Air',
// 2.3: 'Electrical Power'
    '2.3': 'Electrical Power',
    // 2.31: 'Demand Management',
    '2.31': 'Demand Management',
    '2.311': 'Thermal Energy Storage',
    '2.313': 'Scheduling',
    '2.314': 'Battery Storage',
    '2.319': 'Miscellaneous',
    // 2.32: 'Power Factor',
    '2.32': 'Power Factor',
    '2.321': 'General',
    '2.33': 'Generation of Power',
    '2.331': 'DC',
    '2.332': 'AC',
    // 2.34: 'Cogeneration',
    '2.34': 'Cogeneration',
    '2.341': 'General',
    // 2.35: 'Transmission',
    '2.35': 'Transmission',
    '2.351': 'Transformers',
    '2.352': 'Conductor Size',
// 2.4: 'Motor Systems'
    '2.4': 'Motor Systems',
    // 2.41: 'Motors',
    '2.41': 'Motors',
    '2.411': 'Operations',
    '2.413': 'Hardware',
    '2.414': 'Motor Systems Drives',
    '2.415': 'Motor Maintenance/Repair',
    // 2.42: 'Air Compressors',
    '2.42': 'Air Compressors',
    '2.422': 'Hardware',
    '2.423': 'Operations',
    // 2.43: 'Other Equipment',
    '2.43': 'Other Equipment',
    '2.431': 'Operations',
    '2.432': 'Hardware',
// 2.5: 'Industrial Design'
    '2.5': 'Industrial Design',
    // 2.51: 'Systems',
    '2.51': 'Systems',
    '2.511': 'Thermal',
    '2.512': 'Mechanical',
    '2.519': 'Miscellaneous',
// 2.6: 'Operations'
    '2.6': 'Operations',
    // 2.61: 'Maintenance',
    '2.61': 'Maintenance',
    '2.612': 'General',
    // 2.62: 'Equipment Control',
    '2.62': 'Equipment Control',
    '2.621': 'Equipment Use Reduction',
    '2.622': 'Equipment Scheduling',
    '2.623': 'Equipment Automation',
    '2.624': 'Load Reduction',
// 2.7: 'Building and Grounds'
    '2.7': 'Building and Grounds',
    // 2.71: 'Lighting',
    '2.71': 'Lighting',
    '2.711': 'Level',
    '2.712': 'Operation',
    '2.713': 'Controls',
    '2.714': 'Hardware',
    // 2.72: 'Space Conditioning',
    '2.72': 'Space Conditioning',
    '2.721': 'Maintenance',
    '2.722': 'Operations',
    '2.723': 'Hardware - Heating/Cooling',
    '2.724': 'Hardware - Air Circulation',
    '2.725': 'Evaporation',
    '2.726': 'Controls',
    '2.727': 'Humidity control',
    '2.729': 'Miscellaneous',
    // 2.73: 'Ventilation',
    '2.73': 'Ventilation',
    '2.731': 'General',
    // 2.74: 'Building Envelope',
    '2.74': 'Building Envelope',
    '2.742': 'Solar Loading',
    '2.743': 'Infiltration',
    '2.749': 'Miscellaneous',
// 2.8: 'Ancillary Costs'
    '2.8': 'Ancillary Costs',
    // 2.81: 'Administrative',
    '2.81': 'Administrative',
    '2.811': 'Utility Costs',
    '2.812': 'Fiscal',
    // 2.82: 'Shipping, Distribution, and Transportation',
    '2.82': 'Shipping, Distribution, and Transportation',
    '2.821': 'Shipping',
    '2.822': 'Vehicles',
// 2.9: 'Alternative Energy Usage'
    '2.9': 'Alternative Energy Usage',
    // 2.91: 'General',
    '2.91': 'General',
    '2.911': 'Solar',
    '2.912': 'Wind Power',
    '2.913': 'Hydrogen',
    '2.914': 'Biofuels',
// Section 3 mappings
    "3" : "Waste Minimization/Pollution Prevention",
// '3.1': 'Operations'
    '3.1': 'Operations',
    // '3.11': 'Procedures'
    '3.11': 'Procedures',
    '3.111': 'Process Specific',
    '3.112': 'Material Application',
    '3.113': 'Stripping',
    '3.115': 'Desulfurization/Slag Management',
    '3.116': 'Reduction/Elimination',
    '3.117': 'Product Specifications',
    '3.118': 'By-Product Use',
    '3.119': 'Miscellaneous',
    // 3.12: 'Waste Stream Containment',
    '3.12': 'Waste Stream Containment',
    '3.122': 'Rinsing Strategies',
    '3.123': 'Dragout Reduction',
    '3.129': 'Miscellaneous',
// '3.2': 'Equipment'
    '3.2': 'Equipment',
    // '3.21': 'General'
    '3.21': 'General',
    '3.211': 'Fault Tolerance',
    '3.212': 'Painting Operations',
    '3.213': 'Process Specific Upgrades',
    '3.214': 'Tank Design',
    '3.216': 'Systems Monitoring',
    '3.217': 'Automation',
// '3.3': 'Post Generation Treatment/Minimization'
    '3.3': 'Post Generation Treatment/Minimization',
    // '3.31': 'General'
    '3.31': 'General',
    '3.311': 'Neutralization',
    '3.312': 'Remove of Contaminants',
    '3.313': 'Materials Concentration',
// '3.4': 'Water Use'
    '3.4': 'Water Use',
    // '3.41': 'General'
    '3.41': 'General',
    '3.411': 'Close Cycle Water Use',
    '3.413': 'Water Quality',
    '3.414': 'Water Treatment',
    '3.415': 'Reduction',
// '3.5': 'Recycling'
    '3.5': 'Recycling',
    //'3.51': 'Liquid Waste',
    '3.51': 'Liquid Waste',
    '3.511': 'Oil',
    '3.512': 'Ink',
    '3.513': 'White Water',
    '3.514': 'Miscellaneous',
    //'3.52': 'Solid Waste',
    '3.52': 'Solid Waste',
    '3.521': 'General',
    '3.522': 'Sand',
    '3.524': 'Metals',
    //'3.53': 'Other Materials',
    '3.53': 'Other Materials',
    '3.531': 'General',

// '3.6': 'Waste Disposal'
    '3.6': 'Waste Disposal',
    // '3.61': 'General'
    '3.61': 'General',
    '3.611': 'Sludge Maintenance',
    '3.612': 'Combustion of Waste Products',
    '3.619': 'Miscellaneous',
// '3.7': 'Maintenance'
    '3.7': 'Maintenance',
    // '3.71': 'Cleaning/Degreasing'
    '3.71': 'Cleaning/Degreasing',
    '3.711': 'Mechanical Cleaning',
    '3.712': 'Reduction of Cleaning',
    '3.713': 'Rag Use',
    '3.714': 'Preventative Maintenance',
    '3.719': 'Miscellaneous',
    // '3.72': 'Spillage'
    '3.72': 'Spillage',
    '3.721': 'Operations',
    '3.722': 'Hardware',
    // '3.73': 'Other'
    '3.73': 'Other',
    '3.731': 'Leak Reduction',
    '3.739': 'Miscellaneous',
// '3.8': 'Raw Materials'
    '3.8': 'Raw Materials',
    // '3.81': 'Solvents'
    '3.81': 'Solvents',
    '3.811': 'Use Reduction',
    '3.812': 'Emission Reduction',
    '3.813': 'Material Replacement',
    '3.814': 'Solvent Recovery',
    // '3.82': 'Other Solutions'
    '3.82': 'Other Solutions',
    '3.821': 'Water-Based Substitutes',
    '3.822': 'Other Substitutes',
    // '3.83': 'Solids'
    '3.83': 'Solids',
    '3.831': 'General',

// Section 4 mappings
    "4": "Direct Productivity Enhancements",
// '4.1': 'Manufacturing Enhancements'
    '4.1': 'Manufacturing Enhancements',
    '4.11': 'Bottleneck Reduction',
    '4.12': 'Defect Reduction',
    '4.13': 'Material Reduction',
// '4.2': 'Purchasing'
    '4.2': 'Purchasing',
    '4.21': 'Raw Materials',
    '4.22': 'Ancillary Materials',
    '4.23': 'Capital',
// '4.3': 'Inventory'
    '4.3': 'Inventory',
    '4.31': 'Just in Time',
    '4.32': 'Other Inventory Controls',
// '4.4': 'Labor Optimization'
    '4.4': 'Labor Optimization',
    '4.42': 'Practices/Procedures',// does not do 4.41 unsure why ARC Code Issues?
    '4.43': 'Training',
    '4.44': 'Automation',
    '4.45': 'Scheduling',
    '4.46': 'Maintenance',
// '4.5': 'Space Utilization'
    '4.5': 'Space Utilization',
    '4.51': 'Floor Layout',
    '4.52': 'Rental Space',
// '4.6': 'Reduction of Downtime'
    '4.6': 'Reduction of Downtime',
    '4.61': 'Maintenance',
    '4.62': 'Quick Change',
    '4.63': 'Power Conditioning',
    '4.64': 'Alarms',
    '4.65': 'Other Equipment',
    '4.66': 'Industrial Internet of Things Sensors(IoT)',
// '4.7': 'Management Practices'
    '4.7': 'Management Practices',
    '4.71': 'Total Quality Management',
    '4.72': 'Certification',
    '4.73': 'Marketing',
// '4.8': 'Other Administrative Savings'
    '4.8': 'Other Administrative Savings',
    '4.81': 'Taxes',
    '4.82': 'Fees',
  };
  
  export default mappings;
  