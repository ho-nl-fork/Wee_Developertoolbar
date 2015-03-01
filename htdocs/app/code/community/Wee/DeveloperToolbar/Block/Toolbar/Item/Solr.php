<?php
/**
 * Magento
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/osl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@magentocommerce.com so we can send you a copy immediately.
 *
 * @category    Wee
 * @package     Wee_DeveloperToolbar
 * @author      Stefan Wieczorek <stefan.wieczorek@mgt-commerce.com>
 * @copyright   Copyright (c) 2011 (http://www.mgt-commerce.com)
 * @license     http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */

class Wee_DeveloperToolbar_Block_Toolbar_Item_Solr extends Wee_DeveloperToolbar_Block_Toolbar_Item
{
    public function __construct($name, $label = '')
    {
        parent::__construct($name, $label);
        $this->setIcon($this->getSkinUrl('wee_developertoolbar/images/solr.png'));

        if ($this->getIsEngineAvailableForNavigation()) {
            $this->setLabel('<span style="width:8px; height:8px; display:inline-block; background:green; border-radius: 10px;">&nbsp;</span>');
        } else {
            $this->setLabel('<span style="width:8px; height:8px; display:inline-block; background:darkred; border-radius: 10px;">&nbsp;</span>');
        }

        $this->_content = new Wee_DeveloperToolbar_Block_TabContainer_Solr('Solr');
    }


    public function getMode() {
        if ($this->_mode) {
            return $this->_mode;
        }

        if (Mage::helper('core')->isModuleEnabled('Mana_Core')) {
            if (in_array(Mage::helper('mana_core')->getRoutePath(), array('catalogsearch/result/index', 'manapro_filterajax/search/index'))) {
                return 'search';
            }
        }

        return 'category';
    }

    public function getIsEngineAvailableForNavigation() {
        $catalog = $this->getMode() == 'category';
        return Mage::helper('enterprise_search')->getIsEngineAvailableForNavigation($catalog);
    }
}
